import { v4 as uuidv4} from 'uuid'
import { randUrl, randAvatar } from '@ngneat/falso'



const imgPic = { profilePic: randAvatar()}
 let link = randUrl() 
 let domain = new URL(link).hostname.replace("www", "")

const siteData = [
    {id:uuidv4(), siteName:domain, siteLink:link,}
]

export {siteData, imgPic}