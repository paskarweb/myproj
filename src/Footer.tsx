// тип пользователтский
export type FooterProps = {
  copyright: string;
}

// React.FC<> - передаем функциональный компонент через props и его свойство
export const Footer: React.FC<FooterProps> = (props) => (
  <footer>Footer {props.copyright} </footer>
);
