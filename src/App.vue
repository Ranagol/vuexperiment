<template>
  <div id="app" class="container">
    <div class="d-flex flex-row justify-content-around top-margin border border-success my-padding">

      <div>
        <app-button1></app-button1>
        <app-button2></app-button2>
      </div>

      <div>
        <p>we will see</p>
      </div>

      <div>
        <app-display1></app-display1>
        <app-display2></app-display2>
      </div>

    </div>
    
  </div>
</template>

<script>
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Display1 from './components/Display1';
import Display2 from './components/Display2';
export default {
  name: 'App',
  components: {
    'app-button1': Button1,
    'app-button2': Button2,
    'app-display1': Display1,
    'app-display2': Display2,
  }
}
</script>

<style>
.top-margin {
  margin-top: 50px;
}
.my-padding {
  padding: 10px;
}
</style>
