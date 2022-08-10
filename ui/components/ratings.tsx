import { round } from 'utils/math'
import { Icon } from '@iconify/react'
import biStar from '@iconify/icons-bi/star'
import biStarHalf from '@iconify/icons-bi/star-half'
import biStarFill from '@iconify/icons-bi/star-fill'

type RatingsProps = {
  rating: number
}

// prettier-ignore
export const Ratings = ({ rating }: RatingsProps) => (
  <div className="flex font-light gap-0.5 items-center text-amber-400">
    {rating > 0.66 ? <Icon icon={biStarFill} /> : rating > 0.33 ? <Icon icon={biStarHalf} /> : <Icon icon={biStar} />}
    {rating > 1.66 ? <Icon icon={biStarFill} /> : rating > 1.33 ? <Icon icon={biStarHalf} /> : <Icon icon={biStar} />}
    {rating > 2.66 ? <Icon icon={biStarFill} /> : rating > 2.33 ? <Icon icon={biStarHalf} /> : <Icon icon={biStar} />}
    {rating > 3.66 ? <Icon icon={biStarFill} /> : rating > 3.33 ? <Icon icon={biStarHalf} /> : <Icon icon={biStar} />}
    {rating > 4.66 ? <Icon icon={biStarFill} /> : rating > 4.33 ? <Icon icon={biStarHalf} /> : <Icon icon={biStar} />}
    <span className="pl-2 text-slate-400 whitespace-nowrap">{`${round(rating, 2)} / 5`}</span>
  </div>
);
