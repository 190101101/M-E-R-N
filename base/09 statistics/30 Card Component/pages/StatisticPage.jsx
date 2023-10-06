import Header from '../components/header/Header';
import StatisticCard from '../components/statistics/StatisticCard';

const StatisticPage = () => {

  return (
    <>
      <Header/>
      <div className='px-6'>
        <h1 className="text-4xl font-bold text-center">Statistic</h1>
        <div className='statistic-section'>
          <h2 className='text-lg'>welcome <span className='text-green-700 font-bold text-xl'>admin</span></h2>

          {/*  */}
          <div className='statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4'>
            <StatisticCard 
              title={"all user"} 
              amount={"10"} 
              img={"images/user.png"}
            />
            
            <StatisticCard 
              title={"total earnings"} 
              amount={"670.94$"} 
              img={"images/money.png"}
            />
            
            <StatisticCard 
              title={"total sales"} 
              amount={"151"} 
              img={"images/sale.png"}
            />
            
            <StatisticCard 
              title={"all products"} 
              amount={"19"} 
              img={"images/product.png"}
            />
          </div>
          {/*  */}

        </div>
      </div>
    </>  
  )
}

export default StatisticPage