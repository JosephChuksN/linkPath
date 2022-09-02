import { v4 as uuidv4} from 'uuid'
import { randUrl, randDomainName } from '@ngneat/falso'

const siteData = [
    {id:uuidv4(), siteName:randDomainName(), siteLink:randUrl(),}
]

export {siteData}