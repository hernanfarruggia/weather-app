import './nav-bottom.scss';

class NavBottomCtrl {

    constructor() {

    }
}

let navBottomComponent = {
    bindings: {
        actions: '<',
        activeOption: '<'
    },
    templateUrl: '/app/common/nav-bottom/nav-bottom.html',
    controller: NavBottomCtrl
};

export default navBottomComponent;
