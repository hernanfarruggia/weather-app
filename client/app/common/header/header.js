import './header.scss';

class HeroCtrl {

    constructor() {
        this.iconType = 'Logo';
    }
}

let heroComponent = {
    bindings: {},
    templateUrl: '/app/common/header/header.html',
    controller: HeroCtrl
};

export default heroComponent;
