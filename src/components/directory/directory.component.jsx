import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'treat-category-1',
          imageUrl: 'https://i.ibb.co/nDfd3tF/treat-category-1.jpg',
          id: 1,
          linkUrl: 'shop/treat-category-1'
        },
        {
          title: 'treat-category-2',
          imageUrl: 'https://i.ibb.co/tDYQ3dL/treat-category-2.jpg',
          id: 2,
          linkUrl: 'shop/treat-category-2'
        },
        {
          title: 'treat-category-3',
          imageUrl: 'https://i.ibb.co/StX9g98/treat-category-3.jpg',
          id: 3,
          linkUrl: 'shop/treat-category-3'
        },
        {
          title: 'treat-category-4',
          imageUrl: 'https://i.ibb.co/TWZ9DzR/treat-category-4.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/treat-category-4'
        },
        {
          title: 'treat-category-5',
          imageUrl: 'https://i.ibb.co/sKfTsLB/treat-category-5.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/treat-category-5'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;