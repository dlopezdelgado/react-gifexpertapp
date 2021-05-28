import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';



describe('GifGridItem', () => {

  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe mostrar el componente correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un párrafo con el title', () => {

    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe mostrar src con valor url y alt con title', () => {

    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  });

  test('Debe tener la clase animate__fadeIn', () => {
    
    const div = wrapper.find('div');
    const className = div.prop('className');
    // expect(className).toContain('animate__fadeIn');
    expect(className.includes('animate__fadeIn')).toBe(true);

  })
  



});
