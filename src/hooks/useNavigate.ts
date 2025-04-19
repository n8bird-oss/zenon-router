import { useRouter } from "./useRouter";

export function useNavigate() {
  const router = useRouter();
  return {
    push: (path: string) => router.push(path),
    replace: (path: string) => router.replace(path),
  };
}