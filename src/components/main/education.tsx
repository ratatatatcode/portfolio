import EducationComponent from '../shared/education';

export default function EducationSection() {
  return (
    <section className="w-full">
      <h2 className="mb-2 font-bold">EDUCATION</h2>
      <div className="flex w-full flex-col gap-6">
        <EducationComponent
          img_src="/education/BSU003.webp"
          program="Bachelor of Science in Computer Science"
          level="College"
          school="Batangas State University"
          year_range="2022"
        />
      </div>
    </section>
  );
}
