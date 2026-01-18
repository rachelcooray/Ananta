from PIL import Image
from collections import Counter

def get_dominant_colors(image_path, num_colors=5):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        img = img.resize((150, 150)) # Resize for speed
        pixels = list(img.getdata())
        
        # Filter out common UI colors if screenshot includes PDF viewer chrome (optional)
        # For now, just getting raw counts
        counts = Counter(pixels)
        common = counts.most_common(num_colors)
        
        print(f"Dominant colors for {image_path}:")
        for color, count in common:
            hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
            print(f"  {hex_color} (RGB: {color}) - Count: {count}")
            
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

if __name__ == "__main__":
    print("--- First Page (Background) ---")
    get_dominant_colors("/Users/rachelcooray/.gemini/antigravity/brain/5645a7b9-9788-4caa-9050-2e805985e892/pdf_first_page_colors_1768754916203.png")
    print("\n--- Accent Section (Gold Block) ---")
    get_dominant_colors("/Users/rachelcooray/.gemini/antigravity/brain/5645a7b9-9788-4caa-9050-2e805985e892/pdf_accent_colors_1768754940224.png")
