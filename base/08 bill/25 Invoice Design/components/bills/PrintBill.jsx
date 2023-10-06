import {Modal, Button} from 'antd';

const PrintBill = ({isModalOpen, setIsModalOpen}) => {

  return (
    <>
      <Modal 
        title="Print Bill" 
        open={isModalOpen} 
        onCancel={() => {setIsModalOpen(false)}} 
        footer={false}
        width={800}>

        <section className="py-20 bg-black">
          <div className='max-w-5xl mx-auto bg-white px-6'>
            <article className='overflow-hidden'>
              <div className='logo my-6'>
                <h2 className='text-4xl font-bold text-slate-700'>LOGO</h2>
              </div>
              <div className="bill-details">
                <div className='grid grid-cols-4 gap-12'>
                  
                  <div className='text-md text-slate-500'>
                    <p className='font-bold text-slate-700'>Bill Details:</p>
                    Unwrapped
                    <p>Fake Street 123</p>
                    <p>San Javiev</p>
                    <p>CA 1234</p>
                  </div>

                  {/*  */}
                  <div className='text-md text-slate-500'>
                    <p className='font-bold text-slate-700'>Bill</p>
                    <p>The Boring Company</p>
                    <p>Tesla Street 007</p>
                    <p>Frisco</p>
                    <p>CA 0000</p>
                  </div>

                  {/*  */}
                  <div className='text-md text-slate-500'>
                    <div>
                      <p className='font-bold text-slate-700'>Bill Number</p>
                      <p>00041</p>
                    </div>
                    <div>
                      <p className='font-bold text-slate-700 mt-2'>Date of issue</p>
                      <p>2023.09.09</p>
                    </div>
                  </div>

                  {/*  */}

                  <div className='text-md text-slate-500'>
                    <div>
                      <p className='font-bold text-slate-700'>Terms</p>
                      <p>10 day</p>
                    </div>
                    <div>
                      <p className='font-bold text-slate-700 mt-2'>Due</p>
                      <p>2023.09.09</p>
                    </div>
                  </div>
                 
                </div>
              </div>
              {/* bill details */}

              <div className='bill-table-area'>
                <table className='min-w-full divide-y divide-slate-500 overflow-hidden'>
                  <thead>
                    <tr className='border-b'>
                      <th scope="col" className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>image</th>
                      <th scope="col" className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>title</th>
                      <th scope="col" className='py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>price</th>
                      <th scope="col" className='py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>amount</th>
                      <th scope="col" className='py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-slate-200'>
                      <td className='py-4 pl-4 pr-3 sm:pl-6'>
                        <img className="w-12 h-12 object-cover w-full border-b" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"/>
                      </td>
                      <td className='py-4'>
                        <span className="font-medium">apple</span>
                      </td>
                      <td className='py-4 pl-4 text-center'>
                        <span>5$</span>
                      </td>
                      <td className='py-4 pl-4 text-center'>
                        <span>1</span>
                      </td>
                      <td className='py-4 pl-4 text-end'>
                        <span>1</span>
                      </td>
                    </tr>

                    <tr className='border-b border-slate-200'>
                      <td className='py-4 pl-4 pr-3 sm:pl-6'>
                        <img className="w-12 h-12 object-cover w-full border-b" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"/>
                      </td>
                      <td className='py-4'>
                        <span className="font-medium">apple</span>
                      </td>
                      <td className='py-4 pl-4 text-center'>
                        <span>5$</span>
                      </td>
                      <td className='py-4 pl-4 text-center'>
                        <span>1</span>
                      </td>
                      <td className='py-4 pl-4 text-end'>
                        <span>1</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className='text-right pt-4' colSpan='4' scope="row">
                        <span className="font-normal text-slate-700 ">subtotal</span>
                      </th>
                      <th className='text-right pt-4' scope="row">
                        <span className="font-normal text-slate-700 ">6$</span>
                      </th>
                    </tr>
                    <tr>
                      <th className='text-right pt-4' colSpan='4' scope="row">
                        <span className="font-normal text-slate-700 ">tax</span>
                      </th>
                      <th className='text-right pt-4' scope="row">
                        <span className="font-normal text-red-700 ">+6$</span>
                      </th>
                    </tr>
                    <tr>
                      <th className='text-right pt-4' colSpan='4' scope="row">
                        <span className="font-normal text-slate-700 ">Total</span>
                      </th>
                      <th className='text-right pt-4' scope="row">
                        <span className="font-normal text-slate-700 ">11$</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
                {/* table */}

                <div className="py-9">
                  <div className='border-t pt-9 border-slate-400'>
                    <p className='text-sm font-light text-slate-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum totam cupiditate iusto possimus laboriosam maxime quos architecto perspiciatis mollitia hic laborum, ipsa magni alias maiores laudantium odit nemo earum? Quo alias atque perspiciatis officia tempora incidunt, nulla adipisci natus beatae accusantium voluptas corporis illo est quia soluta repellendus voluptatem? In cum deserunt nam nihil! Nemo aspernatur dolor magni mollitia, maxime ipsa doloremque consectetur deleniti commodi perspiciatis nulla saepe dolorem illum neque, cupiditate sequi at nisi fugiat, labore dicta laudantium? Porro quos aut soluta quaerat. Consequuntur quos sint molestias explicabo illum neque dolor libero accusamus quibusdam, adipisci, voluptas, animi odit necessitatibus! </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div className='flex justify-end mt-4'>
          <Button type="primary" size="large">Print</Button>
        </div>
      </Modal>
    </>
  )
}

export default PrintBill;