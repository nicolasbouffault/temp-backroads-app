import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink {...link} key={link.id} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default PageLinks
