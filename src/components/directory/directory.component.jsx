import React from 'react';

import electronics from '../../assets/images/electronics.png';
import furniture from '../../assets/images/furniture.png';
import shoes from '../../assets/images/shoes.png';
import men from '../../assets/images/men.png';
import women from '../../assets/images/women.png';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Electronics',
                    id: 1,
                    img: electronics
                },
                {
                    title: 'Furniture',
                    id: 2,
                    img: furniture
                },
                {
                    title: 'Shoes',
                    id: 3,
                    img: shoes
                },
                {
                    title: 'Men',
                    id: 4,
                    img: men,
                    size: 'large'
                },
                {
                    title: 'Women',
                    id: 5,
                    img: women,
                    size: 'large'
                }
            ]
        };
    }

    render() {
        return (
            <div className="directory">
                {this.state.sections.map(({ id, title, img, size }) => (
                    <MenuItem key={id} title={title} img={img} size={size} />
                ))}
            </div>
        );
    }
}

export default Directory;
