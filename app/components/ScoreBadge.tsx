interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    let label = "Needs Work";
    let classes = "bg-red-100 text-red-700 border-red-300";

    if (score > 70) {
        label = "Strong";
        classes = "bg-green-100 text-green-700 border-green-300";
    } else if (score > 49) {
        label = "Good Start";
        classes = "bg-yellow-100 text-yellow-700 border-yellow-300";
    }

    return (
        <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full border ${classes}`}
        >
      {label}
    </span>
    );
};

export default ScoreBadge;
