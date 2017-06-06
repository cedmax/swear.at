import services from 'data/services';
import NavItem from 'components/nav/item';

const navItems = services.map((serviceObj) => (
  <li key={serviceObj.service}>
    <NavItem {...serviceObj} />
  </li>)
);

export default () => (
  <ul>{navItems}</ul>
)
