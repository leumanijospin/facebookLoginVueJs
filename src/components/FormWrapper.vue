<template>
  <div class="flex flex-col items-center md:flex md:flex-row md:justify-center md:gap-x-16 md:mt-52">
          <div class="flex flex-col items-center md:mb-48 gap-y-4">
            <h1 class="text-6xl text-[#1877f2] font-semibold font-[Helvetica, Arial, sans-serif] tracking-tighter w-[500px]">facebook</h1>
            <h2 class=" w-[500px] font-[SFProDisplay-Regular, Helvetica, Arial, sans-serif] text-[28px] leading-8 text-[#1c1e21]"> Avec Facebook, partagez et restez en contact avec votre entourage.</h2>
           </div>
        <div class="flex flex-col gap-y-6 min-h-[456px] min-w-[396px]">
             <form class="flex flex-col justify-evenly items-center bg-white h-[349.83px] w-full shadow-xl rounded-lg px-2.5">
               <CustomizeInput type="text" placeholder="Adresse e-mail ou numéro de tél."/>
               <CustomizeInput type="password" placeholder="Mot de passe" />
               <ButtonWrapper buttonName="Se connecter" class="text-[20px] bg-[#1877f2]"/>
               <a href="# " class=" font-[Helvetica, Arial, sans-serif] text-[#1877f2]  text-sm hover:underline cursor-pointer text-center">Mot de passe oublie?</a>
                <div class="w-[364px] border-[1px] border-solid block bg-[#dadde1]"></div>
                <a href="#" class="rounded-md font-bold font-[' Helvetica, Arial, sans-serif'] text-[17px] text-white text-center w-[216.23px] h-[48px] py-3 border-none bg-[#42b72a]">Créer nouveau compte</a>
             </form>
             <h6 class="text-[#1c1e21] font-['SFProDisplay-Regular, Helvetica, Arial, sans-serif'] text-sm leading-5 w-[396px] font-normal mx-auto text-center">
                <a href="# ">
                    <span class="font-semibold hover:underline">Creer une page</span>
                </a> pour une celebrite, une marque ou une entreprise
            </h6>
        </div>
  </div>
</template>

<script setup>
import CustomizeInput from './CustomizeInput.vue';
import ButtonWrapper from './ButtonWrapper.vue';


</script>