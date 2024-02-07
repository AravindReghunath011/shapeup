import { axiosPrivet } from '@/utils/baseUrl';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

interface SubPlan {
  _id: string;
  type: string;
  trainerId: string;
  amount:number
}

const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const SubscriptionPlan = () => {
  let User = useSelector((state: any) => state.user.user.user);
  console.log(User, 'user from subscription');
  const [subPlan, setSubPlan] = useState<SubPlan[]>([
    { _id: '1', type: 'monthly', trainerId: '123',amount:100 },
    { _id: '2', type: 'monthly', trainerId: '123',amount:200 },
    { _id: '3', type: 'monthly', trainerId: '123',amount:300 },
  ]);
  const [trainerId, setTrainerId] = useState('100');

 
  const displayRazorpay = async (amount:number): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!res) {
        toast.error('Razorpay not working');
        reject(false);
        return;
      }
  
      const options = {
        key: 'rzp_test_GEbMbQd9xNslRS',
        currency: 'INR',
        amount: amount * 100,
        name: 'ShapeUp',
        description: 'Thanks',
        prefill: {
          name: 'Shapeup',
        },
      };
  
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        // Handle failure logic here
        reject(false);
      });
  
      paymentObject.open();
    });
  };

  const handleSub = async (id: string,amount:number) => {
    alert(amount)
    let payment = await displayRazorpay(amount)
    if(payment){
        let data = {
            userId: User.id,
            planId: id,
            trainerId: trainerId,
          };
          axiosPrivet.post('http://localhost:8001/api/trainer/subscribe', { data }).then((response) => {
            console.log(response.data);
          });
    }
    
  };

  return (
    <div>
      <div>
        {subPlan.map((sub) => (
          <button className='w-40 bg-red-500 mr-10' onClick={() => handleSub(sub._id,sub.amount)} key={sub._id}>
            1
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlan;
