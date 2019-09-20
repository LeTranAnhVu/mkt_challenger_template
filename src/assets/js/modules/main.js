// Import Lodash As Demo
import Common from './_common';
import Home from './_home';

export default class Main {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        let common = new Common();

        if($('#home-page').length > 0) {
            let home = new Home();
        }
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){}



    /* ===================================
     *  METHODS
     * =================================== */
}
