// import { add } from './yourappname'; // change this
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  // $(".column1").keypress(function(){
    // var column1 = parseInt($(".column1").val());
    // value = parseInt($(".column1").val());
    $(".column1").on("change", function() {
      var arr1 = []
      $(".column1").each(function(i, element){
        arr1.push(element.value)
      });
      console.log(arr1)
    });
    $(".column2").on("change", function(){
      var arr2 = []
      $(".column2").each(function(i, element){
        arr2.push(element.value)
      });
      console.log(arr2)
    });
    $(".column3").on("change", function(){
      var arr3 = []
      $(".column3").each(function(i, element){
        arr3.push(element.value)
      })
      console.log(arr3)
    })
    $(".column4").on("change", function(){
      var arr4 = []
      $(".column4").each(function(i, element){
        arr4.push(element.value)
      })
      console.log(arr4)
    })
    $(".column5").on("change", function(){
      var arr5 = []
      $(".column5").each(function(i, element){
        arr5.push(element.value)
      })
      console.log(arr5)
    })
    $(".column6").on("change", function(){
      var arr6 = []
      $(".column6").each(function(i, element){
        arr6.push(element.value)
      })
      console.log(arr6);
    })
    $(".column7").on("change", function(){
      var arr7 = []
      $(".column7").each(function(i, element){
        arr7.push(element.value)
      })
      console.log(arr7);
    })
    $(".column8").on("change", function(){
      var arr8 = []
      $(".column8").each(function(i, element){
        arr8.push(element.value)
      })
      console.log(arr8)
    })
});
  // var arr = []
  // $(".column1").onkeydown(function(e){
  //   event.preventDefault();
  //   $(".column1").each(function(i, element){
  //     console.log(element.value);
  //       if (element.value === ""){
  //         console.log("loading")
  //       } else {
  //         arr.push(element.value)
  //         console.log(arr)
  //       }
  //     });
  // });
  // });
