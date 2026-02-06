import { Button } from "@/components/ui/button"

function NotFound() {
    return (
        <div >
            page doesn't exists
            <div className="flex min-h-svh flex-col items-center justify-center">

                 {/* Adding this button for testing purpose shadcn  */}
                <Button>Click me</Button>
            </div>
        </div>
    );
}

export default NotFound;