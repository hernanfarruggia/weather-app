import './icon.scss';

class IconCtrl {

    constructor() {
        this.iconClasses = '';
        this.icons = {
            'Clear': 'icon--clear icon-pack-Cloud-Sun',
            'Clouds': 'icon--cloud icon-pack-Cloud',
            'Logo': 'icon--logo icon-pack-Cloud-Sun',
            'Rain': 'icon--rain icon-pack-Cloud-Rain'
        };
    }

    $onChanges () {
        this.iconClasses = this.getIconClasses();
    }

    getIconClasses () {
        let classes = ['icon'];

        if (this.type) {
            classes.push(this.icons[this.type]);
        } else {
            classes.push('icon icon--na');
        }

        switch (this.size) {
            case 'small':
                classes.push('icon--small');
                break;

            case 'medium':
                classes.push('icon--medium');
                break;

            case 'large':
                classes.push('icon--large');
                break;

            default:
                classes.push('icon--small');
                break;
        }

        return classes.join(' ');
    }
}

let iconComponent = {
    bindings: {
        type: '<',
        size: '@'
    },
    templateUrl: '/app/common/icon/icon.html',
    controller: IconCtrl
};

export default iconComponent;
