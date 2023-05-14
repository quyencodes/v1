export default function ExperienceItem({ expData, index }) {
  return (
    <div className="exp-panel">
      <h3 className="exp-headline">
        <span className="exp-t">{expData[index].title}</span>
        <span className="exp-c"> @ {expData[index].companyName}</span>
      </h3>
      <p className="date-range">
        {expData[index].startDate} - {expData[index].endDate}
      </p>
      <ul className="bullet-panel">
        {expData[index].bullets.map((bullet, index) => (
          <li className="bullet-points" key={index}>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}
