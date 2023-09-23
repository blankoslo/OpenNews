export const Video = ({ src, close }: { src: string; close: () => void }) => (
    <div className="fixed top-0 left-0 min-w-full min-h-full z-[100] bg-black">
        <button onClick={close}>Lukk</button>
        <video controls className="mx-auto" autoPlay>
            <source src={src} type="video/mp4" />
        </video>
    </div>
)
