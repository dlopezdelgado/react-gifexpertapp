import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('GifExpertApp', () => {
  
  test('Debe mostrar el componente correctamente', () => {

    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();

  });

  
  test('debe mostrar una lista de categorias', () => {
    
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);


  });
  

})
