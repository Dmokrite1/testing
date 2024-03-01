import { of } from "rxjs"
import { HeroesComponent } from "./heroes.component"
import { HeroService } from "../hero.service";

/*
*Stub Test
*/

describe('HeroesComponent', () => {
    it('HeroesComponent.getHeroes should set this.heroes heroes array', () => {
        const returnHeroes = [
            {
                name: 'truc',
                id: 1  
            }
        ]

        const stubby = {
            getHeroes: () => {
                return of(returnHeroes);
            }
        }
        const heroComponent = new HeroesComponent(stubby as never)

        heroComponent.getHeroes();

        expect(heroComponent.heroes).toEqual(returnHeroes)
    });

    /*
    * Spy Test
    */

    it('should call heroService on init', () => {
        const service = new HeroService({} as never, {} as never)
        const heroComponent = new HeroesComponent(
            service
        );
        
        spyOn(service, 'getHeroes').and.returnValue(of([]));

        heroComponent.ngOnInit();

        expect(service.getHeroes).toHaveBeenCalled();
    });
});