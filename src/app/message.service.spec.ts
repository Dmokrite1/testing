import { TestBed } from "@angular/core/testing";
import { MessageService } from "./message.service";

describe('MessageService', () => {
    it('adds a message when MessageService.add is called', () => {
        const service = new MessageService();

        service.add('hello');

        expect(service.messages).toEqual(['hello']);
    })
});

/*
* Test with testBed
*/

describe('MessageService with testBed', () => {
    it('adds a message when MessageService.add is called', () => {

        TestBed.configureTestingModule({});
        const service = TestBed.inject(MessageService);

        service.add('helloWorld');

        expect(service.messages).toEqual(['helloWorld']);
    });
});

describe('MessageService with testBed', () => {
    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    });

    it('adds a message when MessageService.add is called', () => {
        service .add('helloWorld');
        expect(service.messages).toEqual(['helloWorld']);
    });

    it('clear() empties the array', () => {
        service.add('message');
       service.clear();
       expect(service.messages).toEqual([]);
    });

    afterEach(() => {
        // cleanup
    });
});

