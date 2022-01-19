import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Biscuits',
          imageUrl: 'https://i.ibb.co/zXM3PKk/treat-category-5.jpg',
          id: 1,
          linkUrl: 'shop/treat-category-1'
        },
        {
          title: 'Pupcakes',
          imageUrl: 'https://i.ibb.co/tDYQ3dL/treat-category-2.jpg',
          id: 2,
          linkUrl: 'shop/treat-category-2'
        },
        {
          title: 'Kibble',
          imageUrl: 'https://i.ibb.co/TWZ9DzR/treat-category-4.jpg',
          id: 3,
          linkUrl: 'shop/treat-category-3'
        },
        {
          title: 'Jerky',
          imageUrl: 'https://i.ibb.co/nDfd3tF/treat-category-1.jpg',
          // size: 'large',
          id: 4,
          linkUrl: 'shop/treat-category-4'
        },
        {
          title: 'Paw Treats',
          imageUrl: 'https://i.ibb.co/rKBYrN2/spoons-biscuits.jpg',
          // size: 'large',
          id: 5,
          linkUrl: 'shop/treat-category-5'
        },
        {
          title: 'Balms',
          imageUrl: 'https://i.ibb.co/StX9g98/treat-category-3.jpg',
          // size: 'large',
          id: 7,
          linkUrl: 'shop/treat-category-7'
        },
        {
          title: 'Locals Only ',
          imageUrl: 'https://i.ibb.co/vzTK4F1/spoons-loaf.jpg',
          id: 6,
          linkUrl: 'shop/treat-category-6'
        },
        {
          title: 'holder',
          imageUrl: 'https://i.ibb.co/Q8z8TQ2/littlespoons.jpg',      
          id: 8,
          linkUrl: 'shop/treat-category-8'
        },
        {
          title: 'holder',
          imageUrl: 'https://i.ibb.co/Q8z8TQ2/littlespoons.jpg',      
          id: 9,
          linkUrl: 'shop/treat-category-9'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;