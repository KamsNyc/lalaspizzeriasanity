import React from 'react'

function Badges() {
    
  return (
        <div className='w-full h-32 flex items-center relative'>
            {/* ICON 1 */}
            <div className=" scale-50 absolute top-0">
      <link rel="stylesheet" href="https://cdn6.localdatacdn.com/badges/restaurantji/css/badge-v4.0.css?v=69836" />

      <div className="w-[25px] h-[25px]">
        <div id="circle_v4">
          <div className="arc-heading left-[17%] top-[36%] leading-[23px] text-[9px]">
            <a target="_blank" href="https://www.restaurantji.com/ny/queens/lalas-pizzeria/" className="block text-2.8em">Recommended</a>
            <span>by</span>
            <a target="_blank" href="https://www.restaurantji.com/" className="ahref_emprty_area">Restaurantji</a>
          </div>

          <div id="circletype_v4_brand_name" className="autoFontSize text-[21.95px]">
            <a target="_blank" href="https://www.restaurantji.com/ny/queens/lalas-pizzeria/" className="ahref_emprty_area">Lala's Pizzeria</a>
          </div>
        </div>
    </div>
    </div>
    {/* ICON 2 */}
    <div className='scale-50 absolute left-[25%] md:left-[10%]'>
      <link rel="stylesheet" href="https://cdn6.localdatacdn.com/badges/restaurantji/css/circle_v20.css?v=7859" />

      <div id="circle_v20_wrap" className="w-[250px] h-[250px]">
        <div style={{ width: '100%', height: '100%' }} id="circle_v20">
          <div id="circletype_v20_brand_name" className="autoFontSize text-[13.5px]">
            <a target="_blank" href="https://www.restaurantji.com/ny/queens/lalas-pizzeria-/" className="ahref_emprty_area" id="ahref_v20_brand_name">Lala's Pizzeria</a>
          </div>
          <a href="https://www.restaurantji.com" target="_blank" id="rewards_link">Restaurantji</a>
        </div>
      </div>
    </div>
    {/* ICON 3 */}
    <div className="scale-50 absolute left-[53%] md:left-[22%]">
      <link rel="stylesheet" href="https://cdn6.localdatacdn.com/badges/restaurantji/css/badge-v3.3.css?v=77313" />

      <div id="circle_v3" className="w-[294px] h-[227px]">
        <div className="rb_flex rb_top">
          <a target="_blank" href="https://www.restaurantji.com/ny/queens/lalas-pizzeria-/" style={{ color: '#000' }}>
            <div className="circletype_v3_brand_name" id="circletype_v3_brand_name" style={{ top: 'calc(50% - 12px * 0.75)', fontSize: 'calc(18px * 0.75)' }}>
              Lala's Pizzeria
            </div>
          </a>
          <div className="arc-heading arc-heading__bottom">
            <a href="https://www.restaurantji.com/ny/queens/" target="_blank">Restaurantji</a>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Badges
