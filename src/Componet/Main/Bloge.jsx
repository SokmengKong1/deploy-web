'use client';
import React from 'react'
import { Carousel } from 'flowbite-react';

export const Bloge = () => {
    return (<><div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
            <div className="   h-full  w-[70%] bg-gray-400 dark:bg-gray-700 dark:text-white">
                <div className=" flex justify-center items-center ">
                    <p className='indent-9   justify-center items-center'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                </div>
                <div className=" flex justify-center items-center  ">
                    <img className='rounded-full w-[80px] flex justify-center items-center ' src="https://themewagon.github.io/furni/images/person-1.png" alt="" />
                </div>

            </div>

        </Carousel>
    </div>


        <div className="w3-content w3-display-container">
            <div className="flex w-[800px]">
                <img className='mySlides' src="data:image/jpeg;base64,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" alt="" />
                <img className='mySlides' src="data:image/jpeg;base64,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" alt="" />
                <img className='mySlides' src="data:image/jpeg;base64,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" alt="" />

            </div>

            <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
                <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>

                <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
                <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
                <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
            </div>

        </div>




    </>

    );

}
<script>
    {/* function Hello() {
        alert('Hlelo')
    }
    var slideIndex = 1;
    showDivs(slideIndex); */}







</script>



