import Header from '../components/header/Header';
import StatisticCard from '../components/statistics/StatisticCard';
import React, { useState, useEffect } from 'react';
import { Area, Pie } from '@ant-design/plots';

const Statistic = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  useEffect(() => {
    const getProducts = async() => {
      try{
        const response = await fetch('http://localhost:5000/server/product/all')
        const data = await response.json();
        setProducts(data);

      }catch(error){
        console.log(error);
      }
    }

    getProducts();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:5000/server/bill/all')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'customer',
    yField: 'subtotal',
    xAxis: {
      range: [0, 1],
    },
  };

  const config2 = {
    appendPadding: 10,
    data,
    angleField: 'subtotal',
    colorField: 'customer',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Total',
      },
    },
  };

  const totalAmount = () => {
    const amount = data.reduce((total, item) => item.amount + total, 0);
    return `${amount.toFixed(2)}$`;
  }

  return (
    <>
      <Header/>
      <div className='px-6 pb-20 md:pb-0'>
        <h1 className="text-4xl font-bold text-center">Statistic</h1>
        <div className='statistic-section'>
          <h2 className='text-lg'>welcome <span className='text-green-700 font-bold text-xl'>admin</span></h2>

          {/*  */}
          <div className='statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4'>
            <StatisticCard 
              title={"all user"} 
              amount={data?.length} 
              img={"images/user.png"}
            />
            
            <StatisticCard 
              title={"total earnings"} 
              amount={totalAmount()} 
              img={"images/money.png"}
            />
            
            <StatisticCard 
              title={"total sales"} 
              amount={data?.length} 
              img={"images/sale.png"}
            />
            
            <StatisticCard 
              title={"all products"} 
              amount={products?.length} 
              img={"images/product.png"}
            />
          </div>
          {/*  */}

          <div className='flex justify-between gap-10 lg:flex-row flex-col items-center'>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Area {...config} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Pie {...config2} />
            </div>
          </div> 

        </div>
      </div>
    </>  
  )
}

export default Statistic