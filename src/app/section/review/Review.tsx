import { ReviewsCarousel } from './ReviewCarousal';
import { ReviewService } from './ReviewService';

const Reviews = async () => {
  const response = await ReviewService.getReviewData();

  const review = response?.reviews;

  return (
    <section className="relative w-full overflow-hidden bg-[url('/images/home/review/bg.webp')] bg-cover bg-center px-4 py-12 sm:py-16 md:px-32 md:py-20">
      {/* Background Pattern */}

      <div className="flex flex-col gap-6 md:gap-10">
        <span className="font-aboreto text-center text-4xl font-[400] text-[#FFEFCF] md:text-7xl">
          reviews
        </span>
        <div className="relative">
          {review && <ReviewsCarousel reviews={review} />}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
