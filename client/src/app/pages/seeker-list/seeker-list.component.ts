import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { SeekerService } from '../../services/seeker.service';
// Import Models
import { Seeker } from '../../domain/uberlist_db/seeker';

// START - USED SERVICES
/**
* SeekerService.list
*	@description CRUD ACTION list
*
* SeekerService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Seeker
 * @class SeekerListComponent
 */
@Component({
    selector: 'app-seeker-list',
    templateUrl: './seeker-list.component.html',
    styleUrls: ['./seeker-list.component.css']
})
export class SeekerListComponent implements OnInit {
    list: Seeker[];
    search: any = {};
    idSelected: string;
    constructor(
        private seekerService: SeekerService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.seekerService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Seeker to remove
     *
     * @param {string} id Id of the Seeker to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Seeker
     */
    deleteItem() {
        this.seekerService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
