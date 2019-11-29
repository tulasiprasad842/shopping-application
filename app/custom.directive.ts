import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[trim]',
  host:{'(blur)': 'onChange($event)'}
})
export class allowspacesss {
  regexStr = new RegExp(/^([a-zA-Z0-9 _-]+)$/);
 regexP = new RegExp(/^([a-zA-Z0-9 _-]+\s?)*$/);
 wsRegex=new RegExp(/^\s*(?:[A-Z0-9]\s*){2,10}$/)
 constructor(private el: ElementRef) { }
 
 @HostListener('keypress', ['$event']) onKeyPress(event) {
 let endposition = this.el.nativeElement.selectionEnd;
//  if (this.el.nativeElement.value.length ==0 && event.which == 32)
//  return false;
//   if (this.el.nativeElement.value[endposition - 1] == " " || this.el.nativeElement.value[endposition] == " ") {
//  return false;
//  }
//  else
 return new RegExp(this.regexStr).test(event.key);
 }
 
 @HostListener('paste', ['$event']) blockPaste(event: any) {
 const pastedInput: string = event.clipboardData ? event.clipboardData.getData('text/plain') : window['clipboardData'].getData('Text');
 const pastedInputw: string = (event.clipboardData ? this.el.nativeElement.value : event.target.value) + pastedInput;
 if (!this.regexP.test(pastedInput) || pastedInputw.includes(' ')) {
 event.preventDefault();
 return false;
 }
 }   
  onChange($event:any) {
    let theEvent = $event || window.event;
    theEvent.target.value = theEvent.target.value.trim();
    console.log(theEvent.target.value.length);
    return theEvent.target.value;

}
}