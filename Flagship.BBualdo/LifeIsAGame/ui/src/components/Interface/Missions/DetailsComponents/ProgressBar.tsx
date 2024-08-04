import IMission from "@/src/models/IMission";

const ProgressBar = ({ selectedMission }: { selectedMission: IMission }) => {
  const completedSubtasks = selectedMission.subtasks.filter(
    (subtask) => subtask.isCompleted,
  );
  const progress = Math.ceil(
    (completedSubtasks.length / selectedMission.subtasks.length) * 100,
  );

  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="xs:text-md text-cp-cyan lg:text-lg">
        Progress: {progress}%
      </h3>
      <div className="h-2 w-full -skew-x-12 bg-cp-cyan/20">
        <div
          className="gradient-cp-cyan-bar h-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
