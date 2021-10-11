import { server } from "config";

const transfer = async (
  task: string,
  from: string,
  to: string
): Promise<{ success: boolean; body: string }> => {
  const res = await fetch(`${server}/api/tasks/transfer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: task,
      from: from,
      to: to,
    }),
  });
  const json = await res.json();
  if (json.success) {
    console.log(json.body.payload);
    return { success: true, body: "success" };
  } else {
    return { success: false, body: json.error };
  }
};

const taskService = {
  transfer,
};
export default taskService;
