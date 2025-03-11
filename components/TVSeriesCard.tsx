import * as React from "react"
import { Star, StarHalf } from "lucide-react"
import { cn } from "@/lib/utils"
import { Series } from "@/types/series"

export interface TVSeriesCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id' | 'title'>, Partial<Series> {}

const TVSeriesCard = React.forwardRef<HTMLDivElement, TVSeriesCardProps>(
  ({ className, id, title, rating, summary, imageUrl, streamingServices, releaseYear, ...props }, ref) => {
    const renderRating = (rating: number | undefined) => {
      if (typeof rating === 'undefined') return null;
      const stars = []
      const fullStars = Math.floor(rating)
      const hasHalfStar = rating % 1 >= 0.5

      for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-current text-amber-400" />)
      }

      if (hasHalfStar) {
        stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-current text-amber-400" />)
      }

      const emptyStars = 5 - stars.length
      for (let i = 0; i < emptyStars; i++) {
        stars.push(
          <Star 
            key={`empty-star-${i}`} 
            className="h-4 w-4 text-gray-300 dark:text-gray-600" 
          />
        )
      }

      return stars
    }

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]",
          className
        )}
        {...props}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-1 right-1">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="TMDB Logo"
              className="h-5 w-5 rounded"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <div className="mt-1 flex items-center justify-between">
              <div className="flex items-center">
                {renderRating(rating)}
                {rating && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    {rating.toFixed(1)}/5.0
                  </span>
                )}
              </div>
              {releaseYear && (
                <span className="text-sm text-muted-foreground">{releaseYear}</span>
              )}
            </div>
          </div>
          {summary && (
            <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{summary}</p>
          )}
          {streamingServices && streamingServices.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
              <span className="text-xs text-muted-foreground">Available on:</span>
              {streamingServices.map((service, index) => (
                <div 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  {service}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)
TVSeriesCard.displayName = "TVSeriesCard"

export { TVSeriesCard }
