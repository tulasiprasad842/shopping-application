import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // checked() {
  //   return this.filterItems.filter(item => { return item.checked; });
  // }

  // myForm: FormGroup;
  //   constructor(private fb:FormBuilder) {
  //   this.myForm=this.fb.group({
  //     name: [null, Validators.required],
      
  //   })
  // }
  // removeSpace(){
  //   var str = this.myForm.value(this.myForm);
  //   str.replace(/\s+/g, '');
  //   str.trim()
  // }
//   removeSpace(){
//     var first = this.myForm.value;
//     //  var last = this.myForm.value.lastName;
//       if(first.trim().length == 0){
//      var set = this.myForm.get('firstName').setValue(null);
//      console.log("SetValFirst==>",set);
//      }else if(first.trim().length < 5){
//     var set = this.myForm.get('firstName').setValue(first.trim());
//     console.log("SetValFirst==>",set);
//  }

//  $('.selector').on('blur',function () {
//   $(this).val($.trim($(this).val()));
//   if($(this).val() == "") {
//     alert("Empty values not allowed!");
//     this.focus();
//   }
// });
//  $('.selector').on('blur', function() {
//   var current_value = $.trim($(this).val());
//   $(this).attr('value', current_value);
//   console.log(current_value);
//   if ($('.selector[value="' + current_value + '"]').not($(this)).length > 0 || current_value.length == 0) {
//     $(this).focus();
//     alert('You cannot use this');
//   } else
//   if ($(this).val().indexOf(" ") == 0 || $(this).val().lastIndexOf(" ") == ($(this).val().length - 1)) {
//     alert('You cannot use this too');

//   }
// });
 }
