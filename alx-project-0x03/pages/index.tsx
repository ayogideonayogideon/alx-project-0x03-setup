import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface"; // ✅ Only one import

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">
        Welcome to Splash App!
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      <div className="flex gap-6">
        <Button
          action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
          buttonLabel="Generate Text"
          buttonBackgroundColor="blue"
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
          buttonLabel="Text to Image"
          buttonBackgroundColor="green"
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/counter-app" })}
          buttonLabel="Contact us"
          buttonBackgroundColor="orange"
        />
      </div>
    </div>
  );
}