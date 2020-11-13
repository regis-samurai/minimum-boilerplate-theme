import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

const WishlistLink = ({ render, intl }) => {
  return render([
    {
      name: "Wishlist",
      path: '/wishlist',
    },
  ])
}

WishlistLink.propTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(WishlistLink)
