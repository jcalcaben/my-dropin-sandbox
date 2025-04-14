import { HTMLAttributes } from 'preact/compat';
import { Container } from '@adobe-commerce/elsie/lib';
import  {Price}  from '@adobe-commerce/elsie/components/Price';

export interface CartItemReplacementProps extends HTMLAttributes<HTMLDivElement> {}
    
export const CartItemReplacement: Container<CartItemReplacementProps> = ({ ...props }) => {
  const { context } = props;

  const {
    item,
    attributesToHide,
    getImage,
    getTitle,
    getSku,
    getPriceProps,
    getTotalPriceProps,
    getProductAttributes,
    getConfiguration,
    getWarning,
    getAlert,
    showDiscount,
    showSavings,
    dictionary,
    getSavingsAmount
  } = context;

  const _configurations = getConfiguration(item);

  const configurations = _configurations ? Object.keys(_configurations).map((key) => {
    return (
      <div key={key}>
        <strong>{key}</strong>: {_configurations[key]}
      </div>
    );
  }) : null;


  const customCartItem = (
    <div style={{
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#f8f8f8'
    }}>
      {/* Product Header - Title, SKU, and Price */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px'
      }}>
        <div style={{ flex: 1 }}>
          {getTitle(item)} -
          {getSku(item)}
        </div>
        <div style={{ marginLeft: '16px' }}>
          <Price {...getPriceProps(item)}/>
        </div>
      </div>
      
      {/* Product Details - Image and Attributes */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '12px'
      }}>
        {getImage(item, 0)}
        <div style={{ flex: 1 }}>
          {configurations}
          {getProductAttributes(item)}
        </div>
      </div>

      {/* Quantity and Total */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          {!attributesToHide.includes('quantity') && (
            <span>Quantity: {item.quantity}</span>
          )}
        </div>
        <div>
          {!attributesToHide.includes('total') && (
            <div>
              {getTotalPriceProps(item).totalProps && (
                <Price {...getTotalPriceProps(item).totalProps} />
              )}
              {getTotalPriceProps(item).discountProps && (
                <Price {...getTotalPriceProps(item).discountProps} />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Warnings and Alerts */}
      {getWarning(item) && (
        <div style={{ color: '#d32f2f', marginTop: '8px' }}>
          {getWarning(item)}
        </div>
      )}

      {getAlert(item) && (
        <div style={{ color: '#d32f2f', marginTop: '8px' }}>
          {getAlert(item)}
        </div>
      )}

      {/* Discounts and Savings */}
      {showDiscount && item.discounted && item.discountPercentage && (
        <div style={{ color: '#2e7d32', marginTop: '8px' }}>
          {dictionary.discountPercent.replace(
            '{discount}',
            item.discountPercentage?.toString() ?? ''
          )}
        </div>
      )}

      {showSavings && item.discounted && item.savingsAmount && (
        <div style={{ color: '#2e7d32', marginTop: '8px' }}>
          <Price {...getSavingsAmount(item)} />
          &nbsp;{dictionary.savingsAmount}
        </div>
      )}
    </div>
  );

  return customCartItem;
};
