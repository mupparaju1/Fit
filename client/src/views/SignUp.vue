<template>


    <div class="whole">



        <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  
</div>
    <div class="control">
  <label class="radio">
    <input type="radio" name="answer">
    Male
  </label>
  <label class="radio">
    <input type="radio" name="answer">
    Female
  </label>
</div>

        <label class="checkbox">
  <input type="checkbox">
  I agree to the <a href="#">terms and conditions</a>
</label>
<div>

<a href="/SignIn" class="button-su is-xl ">Sumbit</a>
     </div>     
    </div>
</template>

<style scoped>
.whole{
     margin-top: 50px;
    margin-left: 150px;
    margin-Right: 150px;
    margin-right: 150px;
}

</style>