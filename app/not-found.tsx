import Button from "@/components/button";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center border-b-0.5 border-fff01">
      <div className="text-center">
        <p className="font-semibold text-3xl mb-12">
          Oops! Something went wrong
        </p>
        <div className="flex items-center justify-center">
          <Button text="BACK TO HOMEPAGE" />
        </div>
      </div>
    </div>
  );
}
