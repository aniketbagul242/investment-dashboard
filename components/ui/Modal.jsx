export default function Modal({ open, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[300px]">
        {children}
      </div>
    </div>
  );
}