import { rpcDevnet } from "@/constants";
import { LazorKitProvider } from "@lazorkit/wallet-mobile-adapter";

export default function LazorkitProvider({ children }: { children: React.JSX.Element }) {
    return (
        <LazorKitProvider rpcUrl={rpcDevnet} ipfsUrl="https://portal.lazor.sh" paymasterUrl="https://kora.lazorkit.com" isDebug={false}>
            {children}
        </LazorKitProvider>
    );
}
