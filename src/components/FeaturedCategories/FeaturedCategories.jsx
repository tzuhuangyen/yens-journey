import "./FeaturedCategories.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import CategoryCard from "../CategoryCard/CategoryCard";

const categories = [
  {
    title: "Travel",
    subtitle: "Explore Europe",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "AI",
    subtitle: "Learn Faster",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Frontend",
    subtitle: "Build Beautiful UI",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Parenting",
    subtitle: "Life with Baby",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
];

function FeaturedCategories() {
  return (
    <section className="featured">

      <SectionTitle
        subtitle="Discover"
        title="Explore My World"
      />

      <div className="featured-grid">

        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            subtitle={category.subtitle}
            image={category.image}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedCategories;
