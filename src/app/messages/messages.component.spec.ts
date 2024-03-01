import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponent } from "./messages.component";
import { MessageService } from "../message.service";

describe('MessagesComponent', () => {
    let component: ComponentFixture<MessagesComponent>;
    let element: HTMLElement;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessagesComponent],
            providers: [MessageService]
        }).compileComponents();
        
        component = TestBed.createComponent(MessagesComponent);

        element = component.nativeElement as HTMLElement;
    });

    it('should display nothing when MessageService is empty', () => {
        element = component.nativeElement as HTMLElement;

        expect(element.innerText).toEqual('');
    });

    it('Should display a list of messages if the Message Service is not empty', () => {
        const messageService = TestBed.inject(MessageService);

        messageService.messages = ['test'];

        component.detectChanges();

        expect(element.querySelector('h2')?.innerText).toEqual('Messages');

        expect((element.querySelector('[data-test-id="message-list"]') as HTMLDivElement).innerText).toEqual('test')
    });

    it('Should clear the messages when clicking on the clear button', () => {

        const messageService = TestBed.inject(MessageService);
        messageService.messages = ['test'];
        component.detectChanges();
      
        const clearButton = element.querySelector('[data-test-id="clear-message"]') as HTMLButtonElement;
      
        clearButton.click();
  
        expect(messageService.messages).toEqual([]);
      });     
});