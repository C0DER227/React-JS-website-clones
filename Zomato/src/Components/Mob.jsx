import React from 'react'

function Mob() {
  return (
    <>
      <div className='grid grid-cols-3'>
        <div>
          <img className='py-32 mx-48' src="mob.jpg" alt="" />
        </div>
        <div className='py-32 mx-8 relative left-48 top-6'>
          <h1 className='font-bold text-3xl'>Get the Zomato app</h1>
          <p>We will send you a link, open it on your phone to download the app</p><br />
          <div className='flex justify-self-auto'>
            <label htmlFor="email" className='radio' />
            <input type="radio" name='emailid' id='email' className='radio' />
            <div className="radio__radio">
              <h1>Email</h1>
            </div>
            <label htmlFor="phone" className='radio' />
            <input type="radio" name='phoneid' id='phone' className='radio' />
            <div className="radio__radio">
              <h1>Phone</h1>
            </div>
          </div>
          <div><br />
            <input className='h-12 w-60 border border-1 border-blue-400' type="text" placeholder='Email or Phone??' /><button className='bg-pink-500 rounded h-12 w-50 text-white border border-1 border-black absolute'>Share App Link</button>
          </div><br />
          <p>Download app from</p>
          <div className='flex'>
            <img className='h-30 w-40 cursor-pointer' src="play-store.png" alt="play-store" />
            <img className='h-30 w-40 cursor-pointer' src="app-store.png" alt="app-store" />
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-2xl font-semibold'>Explore options near me</h1><br />
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h1 className='text-black'>Popular cuisines near me</h1>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <a href="#">Bakery food near meBeverages food near meBiryani food near meBurger food near meCafe food near meChinese food near meCoffee food near meDesserts food near meGujarati food near meIce Cream food near meItalian food near meMughlai food near meNorth Indian food near mePizza food near meSandwich food near meShake food near meSichuan food near meSouth Indian food near meStreet food near meTea food near me</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h1 className='text-black'>Popular restaurant types near me</h1>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <a href="#">Bakeries near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meKiosks near mePaan Shop near meQuick Bites near meSweet Shops near me</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <h1 className='text-black'>Cities We Deliver To</h1>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <a href="#">Delhi NCRKolkataMumbaiBengaluruPuneHyderabadChennaiLucknowKochiJaipurAhmedabadChandigarhGoaIndoreGangtokNashikOotyShimlaLudhianaGuwahatiAmritsarKanpurAllahabadAurangabadBhopalRanchiVisakhapatnamBhubaneswarCoimbatoreMangaloreVadodaraNagpurAgraDehradunMysorePuducherrySuratVaranasiPatnaUdaipurKhajurahoNeemranaCuttackTrivandrumHaridwarLehPushkarRajkotMaduraiKozhikodeAlappuzhaThrissurManipalVijayawadaJodhpurKotaAjmerMussoorieRishikeshJalandharJammuManaliDharamshalaRaipurSee more</a>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Mob