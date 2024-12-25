import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft, faRotateRight, faPencil, faEraser, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { MENU_ITEMS } from '@/constants'
import styles from './index.module.css'
import { menuItemClick, actionItemClick } from '@/slice/menuSlice'

const menu = () => {
  const dispatch = useDispatch()
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName))
  }

  const handleActioItemClick = (itemName) => {
      dispatch(actionItemClick(itemName))
  }
  return (
    <div className={styles.menuContainer}>
      <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
          <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} />
      </div>
    </div>
  )
}

export default menu