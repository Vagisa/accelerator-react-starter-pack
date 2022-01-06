import { Link } from 'react-router-dom';
import { GuitarItemProps } from './types';

function GuitarItem({guitar}: GuitarItemProps): JSX.Element {
  return (
    <div className="product-card">
      <img src="img/guitar-2.jpg" width="75" height="190" alt="СURT Z30 Plus Acoustics"/>
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0903 4.13787L6.97656 3.70544L5.58461 1.00895C5.5466 0.935124 5.48405 0.875359 5.40679 0.83903C5.21302 0.747624 4.97756 0.823796 4.88067 1.00895L3.48873 3.70544L0.374948 4.13787C0.289102 4.14959 0.210613 4.18826 0.150521 4.24685C0.0778721 4.3182 0.0378393 4.4142 0.0392191 4.51374C0.0405988 4.61328 0.0832782 4.70822 0.157879 4.77771L2.41074 6.87655L1.87849 9.84022C1.86601 9.90917 1.87399 9.98007 1.90154 10.0449C1.92908 10.1097 1.97508 10.1659 2.03433 10.207C2.09357 10.2481 2.16368 10.2725 2.23672 10.2775C2.30975 10.2825 2.38278 10.2678 2.44753 10.2351L5.23264 8.83593L8.01775 10.2351C8.09379 10.2738 8.18209 10.2867 8.26671 10.2726C8.4801 10.2375 8.62359 10.0441 8.58679 9.84022L8.05454 6.87655L10.3074 4.77771C10.3687 4.72029 10.4092 4.64529 10.4215 4.56326C10.4546 4.35818 10.305 4.16834 10.0903 4.13787V4.13787Z" fill="#C90606"/>
          </svg>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0903 4.13787L6.97656 3.70544L5.58461 1.00895C5.5466 0.935124 5.48405 0.875359 5.40679 0.83903C5.21302 0.747624 4.97756 0.823796 4.88067 1.00895L3.48873 3.70544L0.374948 4.13787C0.289102 4.14959 0.210613 4.18826 0.150521 4.24685C0.0778721 4.3182 0.0378393 4.4142 0.0392191 4.51374C0.0405988 4.61328 0.0832782 4.70822 0.157879 4.77771L2.41074 6.87655L1.87849 9.84022C1.86601 9.90917 1.87399 9.98007 1.90154 10.0449C1.92908 10.1097 1.97508 10.1659 2.03433 10.207C2.09357 10.2481 2.16368 10.2725 2.23672 10.2775C2.30975 10.2825 2.38278 10.2678 2.44753 10.2351L5.23264 8.83593L8.01775 10.2351C8.09379 10.2738 8.18209 10.2867 8.26671 10.2726C8.4801 10.2375 8.62359 10.0441 8.58679 9.84022L8.05454 6.87655L10.3074 4.77771C10.3687 4.72029 10.4092 4.64529 10.4215 4.56326C10.4546 4.35818 10.305 4.16834 10.0903 4.13787V4.13787Z" fill="#C90606"/>
          </svg>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0903 4.13787L6.97656 3.70544L5.58461 1.00895C5.5466 0.935124 5.48405 0.875359 5.40679 0.83903C5.21302 0.747624 4.97756 0.823796 4.88067 1.00895L3.48873 3.70544L0.374948 4.13787C0.289102 4.14959 0.210613 4.18826 0.150521 4.24685C0.0778721 4.3182 0.0378393 4.4142 0.0392191 4.51374C0.0405988 4.61328 0.0832782 4.70822 0.157879 4.77771L2.41074 6.87655L1.87849 9.84022C1.86601 9.90917 1.87399 9.98007 1.90154 10.0449C1.92908 10.1097 1.97508 10.1659 2.03433 10.207C2.09357 10.2481 2.16368 10.2725 2.23672 10.2775C2.30975 10.2825 2.38278 10.2678 2.44753 10.2351L5.23264 8.83593L8.01775 10.2351C8.09379 10.2738 8.18209 10.2867 8.26671 10.2726C8.4801 10.2375 8.62359 10.0441 8.58679 9.84022L8.05454 6.87655L10.3074 4.77771C10.3687 4.72029 10.4092 4.64529 10.4215 4.56326C10.4546 4.35818 10.305 4.16834 10.0903 4.13787V4.13787Z" fill="#C90606"/>
          </svg>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0903 4.13787L6.97656 3.70544L5.58461 1.00895C5.5466 0.935124 5.48405 0.875359 5.40679 0.83903C5.21302 0.747624 4.97756 0.823796 4.88067 1.00895L3.48873 3.70544L0.374948 4.13787C0.289102 4.14959 0.210613 4.18826 0.150521 4.24685C0.0778721 4.3182 0.0378393 4.4142 0.0392191 4.51374C0.0405988 4.61328 0.0832782 4.70822 0.157879 4.77771L2.41074 6.87655L1.87849 9.84022C1.86601 9.90917 1.87399 9.98007 1.90154 10.0449C1.92908 10.1097 1.97508 10.1659 2.03433 10.207C2.09357 10.2481 2.16368 10.2725 2.23672 10.2775C2.30975 10.2825 2.38278 10.2678 2.44753 10.2351L5.23264 8.83593L8.01775 10.2351C8.09379 10.2738 8.18209 10.2867 8.26671 10.2726C8.4801 10.2375 8.62359 10.0441 8.58679 9.84022L8.05454 6.87655L10.3074 4.77771C10.3687 4.72029 10.4092 4.64529 10.4215 4.56326C10.4546 4.35818 10.305 4.16834 10.0903 4.13787V4.13787Z" fill="#C90606"/>
          </svg>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4815 3.14845L7.65225 2.75745L6.38769 0.326959C6.16112 -0.106269 5.50463 -0.111776 5.27612 0.326959L4.01156 2.75745L1.18229 3.14845C0.67492 3.21821 0.471584 3.81115 0.839525 4.15075L2.88644 6.04154L2.40231 8.7125C2.31516 9.1953 2.85158 9.55693 3.30086 9.33114L5.8319 8.07L8.36295 9.33114C8.81223 9.5551 9.34865 9.1953 9.2615 8.7125L8.77737 6.04154L10.8243 4.15075C11.1922 3.81115 10.9889 3.21821 10.4815 3.14845ZM7.78006 5.73314L8.23901 8.27377L5.8319 7.07505L3.4248 8.27377L3.88375 5.73314L1.9356 3.93414L4.62738 3.56332L5.8319 1.25032L7.03643 3.56332L9.72821 3.93414L7.78006 5.73314Z" fill="#C90606"/>
          </svg>
          <span className="rate__count">9</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">СURT Z30 Plus Acoustics</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>129 500 ₽
        </p>
      </div>
      <div className="product-card__buttons"><Link className="button button--mini" to="#">Подробнее</Link><Link className="button button--red button--mini button--add-to-cart" to="#">Купить</Link>
      </div>
    </div>
  );
}

export default GuitarItem;
